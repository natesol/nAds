""" ------------------------------------------------------------------------------------ """
""" --- Server Configurations & Global Variables --------------------------------------- """

from dotenv import load_dotenv
import os

# Load environment variables.
load_dotenv()

IS_DEBUG_MODE = bool(os.environ.get('IS_DEBUG_MODE'))
PORT_NUMBER = int(os.environ.get('DEFAULT_SERVER_PORT'))
CLIENT_URL = os.environ.get('CLIENT_URL')
CLIENT_APP_PATH = os.path.join(os.path.dirname(__file__), '..', '..', 'client', 'dist')


""" ------------------------------------------------------------------------------------ """
""" ------------------------------------------------------------------------------------ """