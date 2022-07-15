<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Emoji;

class EmojiController extends Controller
{
    public function index(){
        $emoji= Emoji::all();
        return response()->json($emoji);
    }
}
