""" ----------------------------------------------------------------------------------------------- """
""" ---- Flask Server Application - Backend Entry File -------------------------------------------- """

import sys
import os

# Set the project directory path to the system path (for module imports).
current_dir = os.path.dirname(os.path.abspath(__file__))
project_dir = os.path.dirname(current_dir)
sys.path.append(project_dir)

from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS, cross_origin

from server.configs.globals import IS_DEBUG_MODE, PORT_NUMBER, CLIENT_URL, CLIENT_APP_PATH
from server.routes import create_routes



# Set the Flask app.
app = Flask(__name__)

# Set the server CORS policy (allow requests from the client).
CORS(app, resources={r"/api/*": {"origins": CLIENT_URL}})

# Initialize the app's routes
create_routes(app)


# Run the app.
if __name__ == '__main__':
    app.run(debug=IS_DEBUG_MODE, port=PORT_NUMBER)



""" ----------------------------------------------------------------------------------------------- """
""" ----------------------------------------------------------------------------------------------- """