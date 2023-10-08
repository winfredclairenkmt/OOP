# 1st class
class ArtPiece:
    def __init__(self, title, artist, medium, year_created, value):
        self.title = title
        self.artist = artist
        self.medium = medium
        self.year_created = year_created
        self.value = value

    def display_info(self):
        print(f"Title: {self.title}")
        print(f"Artist: {self.artist}")
        print(f"Medium: {self.medium}")
        print(f"Year Created: {self.year_created}")
        print(f"Value: ${self.value}")

    def change_owner(self, new_owner):
        print(f"{self.title} has a new owner: {new_owner}")

    def appraise(self, new_value):
        print(f"The appraised value of {self.title} is now ${new_value}")
        self.value = new_value

    def create_replica(self):
        print(f"A replica of {self.title} has been created.")

    def display_age(self, current_year):
        age = current_year - self.year_created
        print(f"{self.title} is {age} years old.")

# Creating 5 objects of the ArtPiece class
art_piece1 = ArtPiece("Starry Night", "Vincent van Gogh", "Oil on Canvas", 1889, 10000000)
art_piece2 = ArtPiece("Mona Lisa", "Leonardo da Vinci", "Oil on Poplar Panel", 1503, 780000000)
art_piece3 = ArtPiece("The Persistence of Memory", "Salvador Dali", "Oil on Canvas", 1931, 35000000)
art_piece4 = ArtPiece("The Scream", "Edvard Munch", "Tempera on Cardboard", 1893, 120000000)
art_piece5 = ArtPiece("Guernica", "Pablo Picasso", "Oil on Canvas", 1937, 200000000)

# Using methods and accessing attributes of the art pieces
art_piece1.change_owner("The Metropolitan Museum of Art")
art_piece2.appraise(800000000)
art_piece3.create_replica()
art_piece4.display_age(2023)

# Display information about each art piece
art_piece1.display_info()
art_piece2.display_info()
art_piece3.display_info()
art_piece4.display_info()
art_piece5.display_info()


# 2nd class
class Music:
    def __init__(self, title, artist, genre, year, duration):
        self.title = title
        self.artist = artist
        self.genre = genre
        self.year = year
        self.duration = duration

    def play(self):
        print(f"Now playing: {self.title} by {self.artist}")

    def pause(self):
        print(f"Paused: {self.title}")

    def skip(self):
        print(f"Skipping to the next track")

    def set_duration(self, new_duration):
        self.duration = new_duration
        print(f"The new duration of {self.title} is {new_duration} minutes")

    def display_info(self):
        print(f"Title: {self.title}")
        print(f"Artist: {self.artist}")
        print(f"Genre: {self.genre}")
        print(f"Year: {self.year}")
        print(f"Duration: {self.duration} minutes")

# Creating 5 objects of the Music class with specified music titles and artists
song1 = Music("Angel", "Halle", "Pop", 2021, 3.5)
song2 = Music("Sedona", "Hound mouth", "Rock", 0, 4.2)
song3 = Music("La Vie En Rose", "Edith Piaf", "Chanson", 1947, 3.8)
song4 = Music("Glimpse of Us", "Joji", "R&B", 2018, 4.0)
song5 = Music("Buttons", "Meija", "Pop", 2017, 3.3)

# Using methods and accessing attributes of the music objects
song1.play()
song2.set_duration(4.5)
song3.skip()
song4.pause()

# Display information about each music object
song1.display_info()
song2.display_info()
song3.display_info()
song4.display_info()
song5.display_info()


# 3rd class
class FashionBrand:
    def __init__(self, name, founder, year_established, headquarters, popular_product):
        self.name = name
        self.founder = founder
        self.year_established = year_established
        self.headquarters = headquarters
        self.popular_product = popular_product

    def introduce(self):
        print(f"Welcome to {self.name}!")
        print(f"Founded by {self.founder} in {self.year_established}.")
        print(f"Headquartered in {self.headquarters}.")
        print(f"Check out our popular product: {self.popular_product}")

    def change_headquarters(self, new_location):
        print(f"{self.name} is relocating its headquarters to {new_location}.")

    def acquire_brand(self, acquired_brand):
        print(f"{self.name} has acquired {acquired_brand}.")

    def update_popular_product(self, new_product):
        print(f"{self.name} now features {new_product} as its popular product.")
        self.popular_product = new_product

    def display_info(self):
        print(f"Name: {self.name}")
        print(f"Founder: {self.founder}")
        print(f"Year Established: {self.year_established}")
        print(f"Headquarters: {self.headquarters}")
        print(f"Popular Product: {self.popular_product}")

# Creating 5 objects of the FashionBrand class
brand1 = FashionBrand("Gucci", "Guccio Gucci", 1921, "Florence, Italy", "Gucci handbags")
brand2 = FashionBrand("Nike", "Phil Knight", 1964, "Beaverton, Oregon, USA", "Nike sneakers")
brand3 = FashionBrand("Chanel", "Coco Chanel", 1909, "Paris, France", "Chanel No. 5 perfume")
brand4 = FashionBrand("Adidas", "Adolf Dassler", 1949, "Herzogenaurach, Germany", "Adidas Originals")
brand5 = FashionBrand("Zara", "Amancio Ortega", 1974, "Arteijo, Spain", "Zara clothing")

# Using methods and accessing attributes of the fashion brands
brand1.introduce()
brand2.change_headquarters("Portland, Oregon, USA")
brand3.acquire_brand("Fendi")
brand4.update_popular_product("Adidas Ultraboost")
brand5.display_info()
