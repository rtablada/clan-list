<?php namespace App\Gadgets;

use App\Services\ClanManager;

class ClansListFromUsers
{
  protected $manager;

  public function __construct(ClanManager $manager)
  {
    $this->manager = $manager;
  }

  public function render($users)
  {
    $clans = $this->manager->getClansForUsers($users);

    return view('partials.clans-for-users', compact('clans'));
  }
}
