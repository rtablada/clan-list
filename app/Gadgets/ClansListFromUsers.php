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

    $data = $clans->toJson();

    return "<div data-component=\"clan-pane\" data-attrs='{\"data\": {$data}}'></div>";
  }
}
