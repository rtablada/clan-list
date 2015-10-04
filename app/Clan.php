<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Clan extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'clans';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'score'];

    public function players()
    {
        return $this->belongsToMany(User::class);
    }

}
