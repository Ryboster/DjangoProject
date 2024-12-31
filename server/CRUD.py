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


    def CreateDatabase(self):
        ''' Make sure the database file exists '''
        homeDatabase = os.path.join(SCRIPT_DIR, DB_NAME + DB_EXTENSION)
        open(homeDatabase, 'a').close()

    def InitializeDatabase(self):
        ''' Initialize tables inside the database '''
        connection = sqlite3.connect(DB_NAME + DB_EXTENSION)
        cursor = connection.cursor()
        cursor.execute(DB_INIT_COMMAND)


    def Create(self, table, column, newValue):
        ''' Insert new record into the database '''
        pass
    
    def Read(self, table, column):
        ''' Retrieve existing record from the database '''
        pass
    
    def Update(self, table, column, newValue):
        ''' Overwrite an existing record in the database '''
        pass

    def Delete(self):
        ''' Delete a record from the database '''
        pass

    

