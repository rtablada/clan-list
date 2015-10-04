<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {

    $query = App\User::with('clans', 'friendsIn', 'friendsOut');

    if ($orderBy = Request::get('order_by')) {
      switch ($orderBy) {
        case 'friends':
          $query = $query->orderByFriends();
          break;
        case 'clans':
          $query = $query->orderByClans();
          break;

        default:
          $query = $query->orderBy($orderBy, 'desc');
          break;
      }

    }

    $users = $query->paginate(25);

    $topTen = App\User::orderBy('score', 'desc')->limit(10)->get();

    $filterOptions = [
      'Order By' => ['Name', 'Score', 'Friends', 'Clans'],
    ];

    return view('results', compact('users', 'topTen', 'filterOptions'));
});
