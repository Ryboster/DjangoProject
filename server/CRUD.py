import os
import sqlite3

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

DB_NAME = "db"
DB_EXTENSION = ".sqlite3"


DB_INIT_COMMAND = """
CREATE TABLE IF NOT EXISTS Home 
        (
        TextContent TEXT,
        CoreSkills TEXT, -- JSON AS TEXT
        Languages  TEXT, -- JSON AS TEXT
        Frameworks TEXT -- JSON AS TEXT
        )
"""
class CRUD:

    def __init__(self):
        self.CreateDatabase()
        self.InitializeDatabase()

    def InitializeDatabase(self):
        connection = sqlite3.connect(DB_NAME + DB_EXTENSION)
        cursor = connection.cursor()
        cursor.execute(DB_INIT_COMMAND)


    def CreateDatabase(self):
        homeDatabase = os.path.join(SCRIPT_DIR, DB_NAME + DB_EXTENSION)
        open(homeDatabase, 'a').close()


    

    def Create(self):
        pass
    
    def Read(self):
        pass
    
    def Update(self):
        pass

    def Delete(self):
        pass

    

