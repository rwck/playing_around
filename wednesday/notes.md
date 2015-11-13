# id in backbone - this is the database id

cid is given to you by backbone


className: "song", this says, when you go and create a new div with this stuff in it, give it the class 'song'


## REGEX

If you see `/ ... /` in Ruby it's a REGEX pattern

`/\d\d-\d\d-\d\d\d\d/`


## Ruby
`date_pattern = '\d\d-\d\d-\d\d\d\d'`

`"11-11-2015" =~ date_pattern`

`"The date is 11-11-2015 and I am happy" =~ date_pattern`

```
"bob" =~ /bob/
"bob" =~ /[Bb]ob/

"Bob" =~/[A-Z]/
"Bob" =~/[A-Za-z0-9]/
```

`/\d/` is the same as `/[0-9]/`

`/\s/` is any whitespace character
`/\S/` any space that is NOT a whitespace

`/\w/` is the same as `[A-Za-z0-9]`

`/W/` anything that's not a word character

`.` any character at all

`Bob Jane" =~ /.ane/`

`/\w+@/\w+` =~ "this@that"

`+` is one or more

`*` is zero or more

`?` zero or one

``` "I want to buy Alice Cooper underpants" =~ /bu?y/

"Poison by Alice Cooper underpants" =~ /bu?y/

```

### Either or
```
(this|that)

"this and that" =~ /(this|that)/
```


`/\d{4}/` - exactly 4 digits.


Matching the whole pattern
`^` start
`$` end


`/^\d{4}$/`


## Brackets in regex

Match any four characters

`/(....)\1/`



`"abba" =~ /(.)(.)\2\1/`


## that's great for did it match.

But say you want to find and replace...

in Ruby

`"donald is great".sub(/donald/, bob)`

`"donald is great".sub(/\w+$/, "worst")`


```
grep

```

`git grep` - go through all the stuff that's checked in and find the thing that matches

## New notes on regex

`.*M?O.*` any number of any character, optional M, O, any number of any character
`A|Z` A or Z
`[bde]` a range of characters
`[^fde]` any characters except these ones
`A*` zero or more
`A?B?` zero or one
`A+` one or more
`(A)\1` backreference
`A{2,}` at least 2
`A{2,8}`between 2 and 5 occurrences
`A{8}` exactly 8 occurrences
`\s` space


---

`[COBRA]+` one of whatever is in the group, one or more times.
`(AB|O|OR)+`
`(.)+\1`
`[^ABRC]+`
