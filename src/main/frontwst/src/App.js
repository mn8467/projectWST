import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <html lang="en">
        <head>
          <meta charset="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          <link rel="shortcut icon" href="./img/fav.png" type="image/x-icon"></link>
          <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.12.1/css/pro.min.css"></link>
          <link rel="stylesheet" type="text/css" href="css/style.css"></link>
                    <title>Welcome To Cleopatra</title>
        </head>
        <body class="bg-gray-100">


        @include('./base/navbar.html')


        <div class="h-screen flex flex-row flex-wrap">

          @include('./base/sidebar.html')

          <div class="bg-gray-100 flex-1 p-6 md:mt-16">


            @include('./index/generalReport.html')

            @include('./index/analytics-1.html')

            @include('./index/salesOverview.html')

            @include('./index/numbers.html')

            @include('./index/quickInfo.html')


          </div>

        </div>

        @include('./base/end.html')
        </body>
        </html>
      </header>

    </div>
  );
}

export default App;
