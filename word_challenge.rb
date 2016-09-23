#!/usr/bin/ruby

require 'open-uri'
require 'net/http'

class WordParser
  attr_reader :url, :filename, :hash

  def initialize(url, filename)
    @url = url
    @filename = filename
    @hash = {}
  end

  def solve
    fetch_file
    list = parse_file
    output_files list
  end

  # Streams a file over http
  def fetch_file
    # Handle any redirection
    redirect_url = Net::HTTP.get_response(URI url)['location'] || url

    download = open redirect_url
    IO.copy_stream download, filename
  end

  # Returns an array of [substring, word] pairs, sorted by substring,
  #   where the substring only occurs once in the file
  def parse_file
    File.open(filename).each { |line| parse_word line.chomp }
    hash.select { |k, v| {k => v} if hash[k][1] }.map { |k, v| [k, v[0]] }.sort
  end

  # Marks all four-character sub-strings of the word as unique or not.
  def parse_word(word)
    (word.length - 3).times do |index|
      sub = word[index..index+3]

      if hash[sub]
        hash[sub][1] = false
      else
        hash[sub] = [word, true]
      end
    end
  end

  # Writes to the output files
  def output_files(list)
    File.open('sequences','w') { |f| f.puts list.map(&:first) }
    File.open('words','w') { |f| f.puts list.map(&:last) }
  end
end


url = 'http://bit.ly/1jveLkY'
filename = 'dictionary.txt'
WordParser.new(url, filename).solve




