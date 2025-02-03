<?php

namespace App\Http\Controllers;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
    {   public function index()
            {

             }
        public function create()
           {
               return view('book.create');
           }


           public function store(Request $request)
           {
            $name=$request->name;
            $description=$request->description;
            $price=$request->price;
            
            $data=[
                'name'=>$name,
                'description'=>$description,
                'price'=>$price
             
            ];
                      // dd(vars[0]: $request);
                 Book::create($data);//insert into database
                 return view("book.success");



           }
}

