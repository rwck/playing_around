# More REgex

/1?(\d{10})/


```
def normalise_phone_number(num)
  result = /1?(\d{10})/.match(num)
end
```

It gets confusing with templates because Rails and Backbone both react to <% %>
