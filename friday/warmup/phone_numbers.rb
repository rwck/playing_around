# if more than 10 digits it's bad
# if 10 digits good
# if it's 11 digits and first is 1, trim the 1 and use the first 10 digits
# if it's 11 digits and it's not a 1, it's a bad number
# if it's more than 11 digits it's a bad number
#
#
#
#

def number_wang(number)
  if number.to_s.length > 11
    puts 'number is bad. just bad'
  end
  if number.to_s =~ /^\d{10}$/
    puts 'number is good'
  end
  if number.to_s =~ /^1\d{10}$/
    puts "number is 11 digits long but that's ok"
    new_number = number.to_s
    new_number.slice!(0)
    number = new_number.to_i
    puts number
  end
  if number.to_s =~ /^^1\d{10}$/
    puts "number is 11 digits long and it's not ok"
  end
end

number_wang(8888888888)
number_wang(19999999999)
number_wang(88888888888)
number_wang(888888889999888)
