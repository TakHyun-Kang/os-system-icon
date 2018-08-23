# OS-System-Icon
A collection of OS icons.

-----------------------------

## Installation
Using npm:

    $ npm i --save os-system-icon
------------------------------
## Available Icon and Class Name
https://takhyun-kang.github.io/os-system-icon/

Please refer to the homepage.

-----------------------------
## Currently Supported Formats
SCSS, Sass, css

------------------------------
## Usage
Import the file to your project and use the variables.

## Example.1
#### Your HTML
````html
<head>
    <link rel="stylesheet" href="<your path>/node_modules/os-system-icon/src/os-system-icon.css">
</head>
<body>
    <div>
        <i class="os-icon-redhat"></i>
        <div>icon-redhat</div>
    </div>
</body>
````
## Example.2
#### Your HTML
````html
<body>
    <div>
        <i class="centos"></i>
        <div>icon-centos</div>
    </div>
    <div>
        <i class="debian"></i>
        <div>icon-debian</div>
    </div>
</body>
````
#### Your Sass, SCSS
````scss
    @import '<your path>/node_modules/os-system-icon/src/os-system-icon.scss';

    // Default icon
    .centos {
      @include os-icon('centos');
    }
    // Custom icon
    .debian {
      display: inline-block;
      width: 35px;
      height: 35px;
      background-image: url(os-icon('debian'));
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
````

