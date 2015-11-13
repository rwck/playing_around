# File.read('file.txt').each_line do |line|
#   line.strip!
#   if line =~ /fred/
#     puts line
#   end
# end
#
# File.read('file.txt').each_line do |line|
#   line.strip!
#   if line =~ /[Ff]red/
#     puts line
#   end
# end

# File.read('file.txt').each_line do |line|
#   line.strip!
#   if line =~ /\./
#     puts line
#   end
# end

# File.read('file.txt').each_line do |line|
#   line.strip!
#   if line =~ /[A-Z]+[a-z]+/
#     puts line
#   end
# end

File.read('file.txt').each_line do |line|
  line.strip!
  if line =~ /(\S)\1/
    puts line
  end
end
