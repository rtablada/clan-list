<?php namespace App\Gadgets;

use Illuminate\Http\Request;

class FilterOptionsBar
{
  protected $request;

  protected $options = [
    'Order By' => ['Name', 'Score', 'Friends', 'Clans'],
  ];

  public function __construct(Request $request)
  {
    $this->request = $request;
  }

  public function render()
  {
    $orderBy = $this->request->get('order_by');
    $options = $this->options;

    return view('partials.filter-options-bar', compact('orderBy', 'options'));
  }
}
