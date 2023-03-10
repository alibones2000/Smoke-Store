puts "sui"

10.times{
    User.create!(
        username: Faker::App.name,
        password: "123",
        email: Faker::Internet.email,
        wallet: 100
    )
}

Game.create!(title: 'Minecraft', genre: 'Sandbox', price: 29.99, platform: 'All', img_url: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png')
Game.create!(title: 'Grand Theft Auto V', genre: 'Open-World', price: 19.99, platform: 'All', img_url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1671485100')
Game.create!(title: 'Resident Evil 4', genre: 'Horror', price: 59.99, platform: 'Nintendo', img_url: 'https://www.residentevil.com/re4/assets/images/common/share-re.png')
Game.create!(title: 'Hollow Knight', genre: 'Metroidvania', price: 14.99, platform: 'All', img_url: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028')
Game.create!(title: 'Red Dead Redemption 2', genre: 'Action-adventure', price: 59.99, platform: 'All', img_url: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png')
Game.create!(title: 'Half-Life 2', genre: 'Action-adventure', price: 39.99, platform: 'All', img_url: 'https://upload.wikimedia.org/wikipedia/en/2/25/Half-Life_2_cover.jpg' )
Game.create!(title: 'Halo: Combat Evolved Anniversary', genre: 'First-person shooter', price: 19.99, platform: 'XBox', img_url: 'https://upload.wikimedia.org/wikipedia/en/9/9c/HaloCEA_boxart.png')
Game.create!(title: 'The Last of Us', genre: 'Survival horror', price: 19.99, platform: 'Sony', img_url: 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg')
Game.create!(title: 'Super Mario 64', genre: 'Adventure', price: 19.99, platform: 'Nintendo', img_url: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg')
Game.create!(title: 'Call of Duty 4: Modern Warfare', genre: 'First-person shooter', price: 39.99, platform: 'All', img_url: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg' )
Game.create!(title: 'The Witcher 3: Wild Hunt', genre: 'Action-adventure', price: 9.99, platform: 'Sony', img_url: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png')
Game.create!(title: 'Uncharted 2: Among Thieves', genre: 'Action-adventure', price: 29.99, platform: 'Sony', img_url: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/99/UP9000-BCUS98123_00-U2COLLECTIONBUND/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720')
Game.create!(title: 'Batman: Arkham City', genre: 'Action-adventure', price: 29.99, platform: 'All', img_url: 'https://upload.wikimedia.org/wikipedia/en/0/00/Batman_Arkham_City_Game_Cover.jpg')
Game.create!(title: 'Overwatch', genre: 'First-person shooter', price: 14.99, platform: 'All', img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Overwatch_cover_art.jpg/220px-Overwatch_cover_art.jpg')
Game.create!(title: 'League of Legends', genre: 'Action role-playing', price: 0, platform: 'PC', img_url: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f')
Game.create!(title: 'God of War Ragnar??k', genre: 'Action-adventure', price: 59.99, platform: 'Sony', img_url: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png')
Game.create!(title: 'Horizon Forbidden West', genre: 'Adventure', price: 59.99, platform: 'Sony', img_url: 'https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9pfXhwbHi5WHECQJdN.png')
Game.create!(title: 'Pok??mon Legends: Arceus', genre: 'Adventure', price: 59.99, platform: 'Nintendo', img_url: 'https://assets-prd.ignimgs.com/2021/11/04/pokmon-legends-arceus-button-fomn-1636006738698.jpg')
Game.create!(title: 'Gran Turismo 7', genre: 'Car racing', price: 59.99, platform: 'Sony', img_url: 'https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/yZ7dpmjtHr1olhutHT57IFRh.png')
Game.create!(title: 'Kingdom Hearts III', genre: 'Adventure', price: 14.99, platform: 'All', img_url: 'https://image.api.playstation.com/cdn/EP0082/CUSA12025_00/OHNJ80jcQ8TDIAK7KmNQdzXswaXoxAH0.png')
Game.create!(title: 'Fortnite', genre: 'Battle royale', price: 0, platform: 'All', img_url: 'https://assets1.ignimgs.com/2018/03/06/fortnite---button-1520296499714.jpg')
Game.create!(title: 'Fifa 23', genre: 'Sports', price: 59.99, platform: 'All', img_url: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0321/GTfjX9RaN2y66lA22bkthbJ8.png')
Game.create!(title: 'Madden NFL 23', genre: 'Sports', price: 59.99, platform: 'All', img_url: 'https://m.media-amazon.com/images/I/81PDqPK7H5L.jpg')
Game.create!(title: 'NBA 2K23', genre: 'Sports', price: 59.99, platform: 'All', img_url: 'https://assets.2k.com/1a6ngf98576c/2RNTmC7iLr6YVlxBSmE4M3/11177cffa2bdbedb226b089c4108726a/NBA23-WEBSITE-PRE_ORDER-HOMPAGE-MODULE2-RETAIL_CAROUSEL-CROSSGEN_EDITION-425x535.jpg')
Game.create!(title: 'Star Wars Jedi: Fallen Order', genre: 'Action-adventure', price: 29.99, platform: 'All', img_url: 'https://cdn.akamai.steamstatic.com/steam/apps/1172380/capsule_616x353.jpg?t=1651767465')
Game.create!(title: 'Fallout 4', genre: 'Open-World', price: 19.99, platform: 'All', img_url: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/2500/4GZyUQ1bHTjICP6GCRG7f65n.png')
Game.create!(title: 'Immortality', genre: 'Adventure', price: 19.99, platform: 'Xbox', img_url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1350200/capsule_616x353.jpg?t=1669169741')
Game.create!(title: 'Microsoft Flight Simulator', genre: 'Flight', price: 47.99, platform: 'Xbox', img_url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/capsule_616x353.jpg?t=1668186331')
Game.create!(title: 'Forza Motorsport 7', genre: 'Car racing', price: 49.99, platform: 'Xbox', img_url: 'https://www.gamespot.com/a/uploads/scale_medium/1197/11970954/3246467-9a6a7536-5758-4313-bdb4-db6ecc23b3a0.jpg')
Game.create!(title: 'Spider-Man', genre: 'Open-World', price: 39.99, platform: 'Sony', img_url: 'https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/pZ2pIEEnH7YhEtpxh1CY6KDz.png')
Game.create!(title: 'Marvel\'s Spider-Man: Miles Morales', genre: 'Open-World', price: 59.99, platform: 'Sony', img_url: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/PRfYtTZQsuj3ALrBXGL8MjAH.jpg')
Game.create!(title: 'Call of Duty: Modern Warfare 2', genre: 'First-person shooter', price: 59.99, platform: 'All', img_url: 'https://image.api.playstation.com/vulcan/ap/rnd/202205/2800/W5uSEsW7yefCNTHatS03v5q7.png')
Game.create!(title: 'Fall Guys: Ultimate Knockout', genre: 'Battle royale', price: 0, platform: 'All', img_url: 'https://cdn1.epicgames.com/offer/50118b7f954e450f8823df1614b24e80/EGS_FallGuys_Mediatonic_S1_2560x1440-187aa50ffaa014885d6702a0b632f848')
Game.create!(title: 'Demon\'s Souls', genre: 'Adventure', price: 43.99, platform: 'Sony', img_url: 'https://image.api.playstation.com/vulcan/img/rnd/202011/1717/GemRaOZaCMhGxQ9dRhnQQyT5.png')
Game.create!(title: 'Halo Infinite', genre: 'First-person shooter', price: 59.99, platform: 'Xbox', img_url: 'https://assets.xboxservices.com/assets/95/eb/95eb973b-006b-4533-8902-f5a3f8dfd955.jpg?n=Halo-Infinite_GLP-Page-Hero-0_1083x609.jpg')
Game.create!(title: 'Gears 5', genre: 'Third-person shooter', price: 19.99, platform: 'Xbox', img_url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1097840/capsule_616x353.jpg?t=1667846999')
Game.create!(title: 'Resident Evil Village', genre: 'Survival horror', price: 19.99, platform: 'All', img_url: 'https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png')
Game.create!(title: 'Super Mario 3D World + Bowser\'s Fury', genre: 'Adventure', price: 19.99, platform: 'Nintendo', img_url: 'https://assets-prd.ignimgs.com/2020/09/04/switch-supermario3dworldbowsersfury-artwork-01-1599185344908.jpg')
Game.create!(title: 'The Forgotten City', genre: 'Adventure', price: 14.99, platform: 'All', img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/The_Forgotten_City_-_cover.jpg/220px-The_Forgotten_City_-_cover.jpg')
Game.create!(title: 'Far Cry 6', genre: 'First-person shooter', price: 59.99, platform: 'All', img_url: 'https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png')

40.times{
    Purchase.create(
        user_id: rand(1..10),
        game_id: rand(1..50)
    )
}

puts "suiiiiiii"
    
