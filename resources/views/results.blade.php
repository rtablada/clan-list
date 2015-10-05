@extends('layout')

@section('content')
<div class="row">
  <div class="col s12 m3">
    @gadget('ClansListFromUsers', $users)
  </div>

  <div class="col s12 m6">
    <div class="row">
      @gadget('FilterOptionsBar')
    </div>
    <div class="row white-card">
      <table class="card-content">
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
            <th>Friends</th>
            <th>Clans</th>
          </tr>
        </thead>
        <tbody>
          @foreach($users as $user)
            <tr>
              <td>{{$user->name}}</td>
              <td>{{$user->score}}</td>
              <td>{{count($user->friends)}}</td>
              <td>{{count($user->clans)}}</td>
            </tr>
          @endforeach
        </tbody>
      </table>
    </div>
  </div>

  <div class="col s12 m3">
    <div class="row">
      @gadget('TopTenUsers')
    </div>
    <div class="row">
      Friends
    </div>
  </div>
</div>
@endsection
