<ul class="collection with-header">
  <li class="collection-header"><h4>Top 10</h4></li>
  @foreach($users as $user)
    <li class="collection-item">
      {{$user->name}}
      <span class="badge">{{$user->score}}</span>
    </li>
  @endforeach
</ul>
