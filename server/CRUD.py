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
        TextContent TEXT,
        CoreSkills TEXT, -- JSON AS TEXT
        Languages  TEXT, -- JSON AS TEXT
        Frameworks TEXT -- JSON AS TEXT
        )
"""

DB_BLOG_INIT_QUERY = """
CREATE TABLE IF NOT EXISTS Blog
    (
    ID STRING UNIQUE,
    Title STRING,
    Pictures STRING,
    Paragraph STRING,
    Rating REAL
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



    def Delete(self, table, column, existingValue, _id):
        ''' Delete a record from the database '''
        print(Fore.BLUE + f"DELETING record FROM {table} ({column}) ... " + Style.RESET_ALL, end=' ')

        self.openConnection()
        query = f"""
        DELETE FROM {table} 
        WHERE {column} = ?
        AND ID = ?
        """
        values = (existingValue, _id)
        
        if self.execute(query, values):
            print(Fore.GREEN + "Success!" + Style.RESET_ALL)
        else:
            print(Fore.RED + "Failed!" + Style.RESET_ALL)
        
        
        self.closeConnection()

#crud = CRUD()
#crud.Create("Home", ("TextContent", "CoreSkills",), ("test3","test4",))
#x = crud.Read("Home", "TextContent", 1)
#print(x)#

#crud.Update("Home", "TextContent", "newValue", 1)
#x = crud.Read("Home", "TextContent", 1)
#print(x)#

#crud.Delete("Home", "TextContent", "newValue", 1)
#x = crud.Read("Home", "TextContent", 1)
#print(x)#
#
#
