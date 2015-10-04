<?php namespace App\Services;

use Illuminate\Support\Collection;

class ClanManager
{
  public function getClansForUsers($users)
  {
    return $users->reduce(function($carry, $user) {
        $userClans = $user->clans;

        return $userClans->reduce(function($c2, $clan) {
            if (isset($c2[$clan->tag])) {
                $x = $c2[$clan->tag];
                $x['count'] ++;

                $c2[$clan->tag] = $x;
            } else {
                $c2[$clan->tag] = [
                    'value' => $clan,
                    'count' => 1,
                ];
            }

            return $c2;
        }, $carry);
    }, new Collection());
  }
}
