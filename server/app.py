""" ----------------------------------------------------------------------------------------------- """
""" ---- Backend Entry File - Flask Server Application -------------------------------------------- """

from flask import Flask, jsonify, send_from_directory
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin
import os


# --- Backend App Configuration --------------------------- #

# Load environment variables.
load_dotenv()

# Set the Flask app.
app = Flask(__name__)

# Set CORS policy.
CORS(app, resources={r"/api/*": {"origins": os.environ.get('CLIENT_URL')}})



# --- Global Variables ------------------------------------ #

IS_DEBUG_MODE = bool(os.environ.get('IS_DEBUG_MODE', True))
PORT_NUMBER = int(os.environ.get('DEFAULT_SERVER_PORT', 8000))
CLIENT_APP_PATH = os.path.join(os.path.dirname(__file__), '..', 'client', 'dist')



# --- Utility Functions ----------------------------------- #
# !!!
# TODO:
# ( ) Implement YOLO object detection logic here
# ( ) write a function to check for ads on channel 12
def check_ads():
    return jsonify({"ads_detected": True})
# !!!



# --- Routes ---------------------------------------------- #

# Base rout "/": serve the app's index page (all other frontend routes are defined in the React app).
@app.route('/')
def index():
    return send_from_directory(CLIENT_APP_PATH, 'index.html')

# Static files route "/static": serve static files from the React build directory.
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory(CLIENT_APP_PATH, filename)


# API route "/api": serve the app's API.
@cross_origin()
@app.route('/api')
def api():
    return jsonify({
        'message': 'nAds API - Welcome!'
    })


# API Channel 12 route "/api/12": serve JSON response to check ads on channel 12.
@cross_origin()
@app.route('/api/12')
def check_ads_on_channel_12():
    is_ads_detected = True

    return jsonify({
        'channel': '12',
        'ads_detected': is_ads_detected
    })




# --- App Runner ------------------------------------------ #

if __name__ == '__main__':
    # Run the app.
    app.run(debug=IS_DEBUG_MODE, port=PORT_NUMBER)



""" ----------------------------------------------------------------------------------------------- """
""" ----------------------------------------------------------------------------------------------- """