![sass image](https://i0.wp.com/techprimelab.com/wp-content/uploads/2020/06/SCSS-or-CSS.jpg?fit=1024%2C576&ssl=1)


## extension of sass

* .sass
* .scss


# installation of sass 

```bash
         npm i -g sass
```

# run to compile file

```bash
        sass -w  < sass.file > < output.css >
```

# the difference between scss or sass file extension

- `sass`: -> it no need to add curly brases it follow intentation like python
- `scss`: -> it follow traditional way


# variables in scss/sass

```bash
                $variable_name: value;

```

- example:
  $color1: rgba(10,12,13,.1);


# make list of variable like array in sass/scss

```bash
$color1: rgba(8, 156, 230, 0.1),rgba(6, 232, 21, 0.3),...;

```

- use that

```bash
 background-color: nth($color1, 2 );

```


## nested scss/sass

```bash

        body{
                color:$color1;
                > div{
                        color:$color2;
                }
                >a{
                        li{
                                color:red;
                        }
                }
        }

```


# Particials in Scss/Sass

- create a file with prefix _file.scss/_file.sass 

- import the file and use 

example:

```bash
        _color.scss
        $color1: rgba(8, 156, 230, 0.1);
        $color2: rgba(89, 196, 250, 0.1);
        $color3: rgba(200, 125, 4, 0.1);
        $color4: rgba(19, 244, 75, 0.1);

```
### how to import

```bash

        @import "_color";

```


# Alias in sass/scss -(Modules)

- avoid the override using alias 

exact of using import we using @use

```bash
                @use "_colors" as color;

                body{
                                background: color.$color;
                }
```

# inheritence in sass/scss

example:
```bash


btn{
        color:"pink";
}
p{
        color:"pink";
}

```


- in this example we see the btn and p have same property exacpt of writing then we write 

```bash

                        btn{
                                color:"pink";
                        }
                        p{
                                @extends btn;
                        }

```


## templates in scss/sass
- the templatates basically used for uncompiled css
- it compiled when u use 
- it just like a selector


```bash

%btn{
        color:pink;
}

p{
        @extends %btn;
}

```


# mixin in scss/sass

- mixin it just like a function it is used when neend a dynamic content

```bash

        @mixin customfun
        {
                        color:green;
        }

        p{
                @include customfun;
        }

```

### get parameter

```bash

        @mixin customfun($color)
        {
                        color:$color;
        }

        p{
                @include customfun(yellow);
        }

```

### default parameter

```bash

        @mixin customfun($color:red)
        {
                        color:$color;
        }

        p{
                @include customfun(yellow);
        }

```



## sudo properties

```bash

        @mixin customfun($color:red)
        {
                        color:$color;
        }

        p{
                @include customfun(yellow);
                &:hover{
                        color:orange;
                }
        }

```



# Operator in sass/scss

```bash

        $w:2px;

```

### use case

```bash

        p{
                width:$w*8;
        }
```