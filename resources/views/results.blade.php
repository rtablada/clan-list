@extends('layout')

@section('content')
<div class="row">
  <div class="col s12 m3">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Clans</h4></li>
      @foreach($clansInfo as $clan)
        <li class="collection-item">
          {{$clan['value']->name}} -
          <span class="grey-text text-lighten-1">{{$clan['value']->tag}}</span>
          <span class="badge">{{$clan['count']}}</span>
        </li>
      @endforeach
    </ul>
  </div>

  <div class="col s12 m6">
    <table>
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

  <div class="col s12 m3">
    <div class="row">
      Top 10
    </div>
    <div class="row">
      Friends
    </div>
  </div>
</div>
@endsection
