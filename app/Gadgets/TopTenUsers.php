<?php namespace App\Gadgets;

use App\User;

class TopTenUsers
{
  protected $user;

  public function __construct(User $user)
  {
    $this->user = $user;
  }

  public function render()
  {
    $users = $this->user->orderBy('score', 'desc')->limit(10)->get();

    return view('partials.top-ten', compact('users'));
  }
}
