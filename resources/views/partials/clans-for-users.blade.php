@inject('clanManager', 'App\Services\ClanManager')

<ul class="collection with-header">
  <li class="collection-header"><h4>Clans</h4></li>
  @foreach($clanManager->getClansForUsers($users) as $clan)
    <li class="collection-item">
      {{$clan['value']->name}} -
      <span class="grey-text text-lighten-1">{{$clan['value']->tag}}</span>
      <span class="badge">{{$clan['count']}}</span>
    </li>
  @endforeach
</ul>
