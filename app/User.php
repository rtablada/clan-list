<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'score'];

    public function clans()
    {
        return $this->belongsToMany(Clan::class);
    }

    public function friendsOut()
    {
        return $this->belongsToMany(User::class, 'friends', 'user_id_1', 'user_id_2', 'friendsIn');
    }

    public function friendsIn()
    {
        return $this->belongsToMany(User::class, 'friends', 'user_id_2', 'user_id_1', 'friendsOut');
    }

    public function getFriendsAttribute()
    {
        return $this->friendsOut->merge($this->friendsIn);
    }

    public function scopeOrderByFriends($query)
    {
      return $query
        ->groupBy('users.id')
        ->leftJoin('friends', function($join) {
          $join->on('users.id', '=', 'friends.user_id_1')
            ->orOn('users.id', '=', 'friends.user_id_2');
          })
        ->orderBy(\DB::raw('COUNT(*)'), 'desc');
    }

    public function scopeOrderByClans($query)
    {
      return $query
        ->groupBy('users.id')
        ->leftJoin('clan_user', function($join) {
          $join->on('users.id', '=', 'clan_user.user_id');
          })
        ->orderBy(\DB::raw('COUNT(*)'), 'desc');
    }
}
