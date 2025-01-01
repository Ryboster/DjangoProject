import os
import sqlite3

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

DB_NAME = "db"
DB_EXTENSION = ".sqlite3"
DB = DB_NAME + DB_EXTENSION


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
        self.openConnection()
        self.cursor.execute(DB_INIT_COMMAND)
        self.closeConnection()
        
    def openConnection(self):
        ''' Open database connection '''
        self.connection = sqlite3.connect(DB)
        self.cursor = self.connection.cursor()
    
    def closeConnection(self):
        ''' Save and close database connection '''
        self.connection.commit()
        self.connection.close()


    def Create(self, table, column, value):
        ''' Insert new record into the database '''
        self.openConnection()
        query = f"""
        INSERT INTO {table} ({column})
        VALUES (?)"""

        self.cursor.execute(query, (value,))
        self.closeConnection()
        

    def Read(self, table, column):
        ''' Retrieve existing record from the database '''
        self.openConnection()

        self.closeConnection()
    

    def Update(self, table, column, newValue):
        ''' Overwrite an existing record in the database '''
        self.openConnection()

        self.closeConnection()


    def Delete(self, table, column, existingValue):
        ''' Delete a record from the database '''
        self.openConnection()

        self.closeConnection()


    def __del__(self):
        self.closeConnection()

    

