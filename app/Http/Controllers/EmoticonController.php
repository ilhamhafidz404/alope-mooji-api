<?php

namespace App\Http\Controllers;

use App\Models\Emoticon;
use Illuminate\Http\Request;

class EmoticonController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {   
        $emoticons= Emoticon::all();
        return response()->json($emoticons);
    }
}
