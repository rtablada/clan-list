@extends('layout')

@section('content')
<div class="row">
    <div class="col s12 m3">
        Clans
    </div>

    <div class="col s12 m6">
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                @foreach($users as $user)
                    <tr>
                        <td>{{$user->name}}</td>
                        <td>{{$user->score}}</td>
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
