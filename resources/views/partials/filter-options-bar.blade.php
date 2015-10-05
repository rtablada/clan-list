<?php use Stringy\StaticStringy as S; ?>

@foreach($options as $option => $values)
  <ul id="dropdown-{{S::dasherize($option)}}" class="dropdown-content">
    @foreach($values as $value)
      <li {{S::dasherize($value) === $orderBy ? 'class=active' : null}}><a href="{{url('?order_by=' . S::dasherize($value))}}">{{$value}}</a></li>
    @endforeach
  </ul>
@endforeach
<nav>
  <div class="nav-wrapper teal">
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      @foreach($options as $option => $values)
        <li {{$orderBy ? 'class=active' : null}}>
          <a class="dropdown-button" href="#!" data-activates="dropdown-{{S::dasherize($option)}}">
          {{$option}}<i class="material-icons right">arrow_drop_down</i>
          </a>
        </li>
      @endforeach
    </ul>
  </div>
</nav>
