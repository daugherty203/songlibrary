require 'faker'
include faker
20.times do 
    Song.create(
        band: Faker::Music.band,
        album: Faker::Music.album,
        genre: Faker::Music.genre,


    )
end
