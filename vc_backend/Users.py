import random
import string


class Users:
    auth_code: str
    password: str
    email: str

    def generate_random(self):
        x = ""
        while len(x) is not 6:
            roll = random.randint(0, 10)
            if roll > 5:
                x += str(random.randint(0, 9))
            else:
                self.auth_code = x
                x += str(random.choice(list(string.ascii_uppercase)))
        return x

    def __init__(self, email, password):
        self.email = email
        self.password = password
        self.reviews = {}
        self.favorites = {}
