<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
     
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Document</title>
    </head>
    <body>
        
        
        <h1>"you can create book from here"</h1>

        <form action="{{route('books.store')}}" method="post">
            @csrf
            <label for="title">Title:</label>
            <input type="text" name="name">
            <br>
            <br>
            <label for="title">Description:</label>
            <textarea name="description" rows="1"cols="15" > </textarea>
            <br>
            <br>
            <label for="author">Author:</label>
            <input type="text" name="author" id="author" required>

            <br>
            <br>

            <label for="title">Price:</label>
            <input type="number" name="price">
            <br>
            <br>
           
            <input type="submit" value="Submit" style="width: 100px; height: 50px;">

        </form>
    </body>
</html>