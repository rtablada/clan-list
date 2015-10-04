@extends('layout')

<?php use Stringy\StaticStringy as S; ?>

@section('content')
<div class="row">
  <div class="col s12 m3">
    @include('partials.clans-for-users')
  </div>

  <div class="col s12 m6">
    <div class="row">
      @foreach($filterOptions as $option => $values)
        <ul id="dropdown-{{S::dasherize($option)}}" class="dropdown-content">
          @foreach($values as $value)
            <li><a href="{{url('?order_by=' . S::dasherize($value))}}">{{$value}}</a></li>
          @endforeach
        </ul>
      @endforeach
      <nav>
        <div class="nav-wrapper teal">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            @foreach($filterOptions as $option => $values)
              <li>
                <a class="dropdown-button" href="#!" data-activates="dropdown-{{S::dasherize($option)}}">
                {{$option}}<i class="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            @endforeach
          </ul>
        </div>
      </nav>
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
      <ul class="collection with-header">
        <li class="collection-header"><h4>Top 10</h4></li>
        @foreach($topTen as $user)
          <li class="collection-item">
            {{$user->name}}
            <span class="badge">{{$user->score}}</span>
          </li>
        @endforeach
      </ul>
    </div>
    <div class="row">
      Friends
    </div>
  </div>
</div>
@endsection
