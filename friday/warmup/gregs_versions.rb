def normalise_phone_number(num)
  if num[0] == '1'
    num = num[1, num.length]
  end

  if num.length != 10
    return nil
  else
    return num
  end
end

def normalise_phone_number(num)
  result = /1?(\d{10})/.match(num)
  if result
    result.captures.first
  end
end

# ---

require 'minitest/autorun'

describe 'normalise_phone_number' do
  it 'less than 10 digits this is a bad number ' do
  normalise_phone_number('123').must_equal nil
end
  it '10 digits assume its good' do
    normalise_phone_number('0123456789').must_equal '0123456789'
  end
  it 'this 11 digits and first number is not 1, its a bad number' do

  end
  it ""
end
