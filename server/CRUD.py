from colorama import Fore, Back, Style
import os
import sqlite3

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

DB_NAME = "db"
DB_EXTENSION = ".sqlite3"
DB = DB_NAME + DB_EXTENSION


DB_HOME_INIT_QUERY = """
CREATE TABLE IF NOT EXISTS Home 
        (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        TextContent TEXT TEXT CHECK(typeof(TextContent) = 'text' OR NULL),
        CoreSkills TEXT CHECK(typeof(CoreSkills) = 'text' OR NULL), -- JSON AS TEXT
        Languages  TEXT CHECK(typeof(Languages) = 'text' OR NULL), -- JSON AS TEXT
        Frameworks TEXT CHECK(typeof(Frameworks) = 'text' OR NULL) -- JSON AS TEXT
        )
"""

DB_BLOG_INIT_QUERY = """
CREATE TABLE IF NOT EXISTS Blog
    (
    ID STRING UNIQUE CHECK(typeof(ID) = 'text' OR NULL),
    Title STRING CHECK(typeof(Title) = 'text' OR NULL),
    Pictures STRING CHECK(typeof(Pictures) = 'text' OR NULL),
    Paragraph STRING CHECK(typeof(Paragraph) = 'text' OR NULL),
    Rating REAL CHECK(typeof(Rating) = 'real' OR NULL)
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
        self.cursor.execute(DB_HOME_INIT_QUERY)
        self.cursor.execute(DB_BLOG_INIT_QUERY)
        self.closeConnection()
        
    def openConnection(self):
        ''' Open database connection '''
        self.connection = sqlite3.connect(DB)
        self.cursor = self.connection.cursor()
    
    def closeConnection(self):
        ''' Save and close database connection '''
        self.connection.commit()
        self.connection.close()

    def execute(self, query, params=()):
        ''' Handle execution in a safe way '''
        try:
            self.cursor.execute(query, params)
        except sqlite3.Error as e:
            print(Fore.BLUE + f"Error while executing the following query: {query}\n{e}" + Style.RESET_ALL)
            return False

        return True

    def GetValuesQuery(self, values):
        valuesQuery = "?"
        for i in range(0, len(values) - 1):
            valuesQuery += ",?"
        return valuesQuery



    def Create(self, table, columns=(), values=()):
        ''' Insert new record into the database '''
        print(Fore.BLUE + f"INSERTING new record INTO {table} ({columns}) ... " + Style.RESET_ALL, end=' ')

        if len(columns) == 1:
            columns = f"({columns[0]})"

        self.openConnection()

        query = f"""
        INSERT INTO {table} {columns}
        VALUES ({self.GetValuesQuery(values)})"""

        if self.execute(query,values):
            print(Fore.GREEN + "Success!" + Style.RESET_ALL)
        else:
            print(Fore.RED + "Failed!" + Style.RESET_ALL)

        self.closeConnection()
        


    def Read(self, table, column, _id):
        ''' Retrieve existing record from the database '''
        print(Fore.BLUE + f"RETRIEVING record FROM {table} at ID {_id} ... " + Style.RESET_ALL, end =' ')

        self.openConnection()
        query = f"""SELECT {column} FROM {table} WHERE ID = ?"""

        self.execute(query, (_id,))

        cell = self.cursor.fetchone()
        self.closeConnection()
        
        try:
            product = cell[0]
            print(Fore.GREEN + "Success!" + Style.RESET_ALL)
        except TypeError as e:
            print(Fore.RED + "Failed!" + Style.RESET_ALL)
            return '404'

        return product



    def Update(self, table, column, newValue, _id):
        ''' Overwrite an existing record in the database '''
        print(Fore.BLUE + f"UPDATING record FROM {table} ({column}) at ID {_id} ... " + Style.RESET_ALL, end=' ')

        self.openConnection()
        query = f"""
        UPDATE {table}
        SET {column} = ?
        WHERE id = ?"""
        
        if self.execute(query, (newValue, _id,)):
            print(Fore.GREEN + "Success!" + Style.RESET_ALL)
        else:
            print(Fore.RED + "Failed!" + Style.RESET_ALL)
        
        self.closeConnection()



    def Delete(self, table, _id):
        ''' Delete a record from the database '''
        print(Fore.BLUE + f"DELETING ID {_id} FROM {table} ... " + Style.RESET_ALL, end=' ')

        self.openConnection()
        query = f"""
        DELETE FROM {table} 
        WHERE ID = ?
        """
        values = (_id,)
        
        if self.execute(query, values):
            print(Fore.GREEN + "Success!" + Style.RESET_ALL)
        else:
            print(Fore.RED + "Failed!" + Style.RESET_ALL)
        
        self.closeConnection()


    def fetchAllIds(self, table):
        print(Fore.BLUE + f"Fetching all IDs from {table} ..." + Style.RESET_ALL, end=' ')

        self.openConnection()

        query = f"""
        SELECT ID FROM {table}
        """

        if self.execute(query):
            print(Fore.GREEN + "Success!" + Style.RESET_ALL)
        else:
            print(Fore.RED + "Failed!" + Style.RESET_ALL)
        
        product = self.cursor.fetchall()
        product = [x[0] for x in product]
        self.closeConnection()

        return product