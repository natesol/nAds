""" ----------------------------------------------------------------------------------------------- """
""" ---- Server Routes - Application & API Routes ------------------------------------------------- """

from flask import jsonify, send_from_directory
from flask_cors import cross_origin

# from server.database import db
from server.configs.globals import CLIENT_APP_PATH


def create_routes(app):
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

    # API Channel 11 route "/api/11": serve JSON response to check ads on channel 11.
    @cross_origin()
    @app.route('/api/11')
    def check_ads_on_channel_11():
        is_ads_detected = False
        test_message = 'No ads detected on channel 11!'

        return jsonify({
            'channel': '11',
            'ads_detected': is_ads_detected,
            'message': test_message
        })

    # API Channel 12 route "/api/12": serve JSON response to check ads on channel 12.
    @cross_origin()
    @app.route('/api/12')
    def check_ads_on_channel_12():
        is_ads_detected = True
        test_message = 'Ads detected on channel 12!'

        return jsonify({
            'channel': '12',
            'ads_detected': is_ads_detected,
            'message': test_message
        })

    # API Channel 13 route "/api/13": serve JSON response to check ads on channel 13.
    @cross_origin()
    @app.route('/api/13')
    def check_ads_on_channel_13():
        is_ads_detected = False
        test_message = 'No ads detected on channel 13!\n\nThis is a test message.'

        return jsonify({
            'channel': '13',
            'ads_detected': is_ads_detected,
            'message': test_message
        })

    # API Channel 14 route "/api/14": serve JSON response to check ads on channel 14.
    @cross_origin()
    @app.route('/api/14')
    def check_ads_on_channel_14():
        is_ads_detected = False
        test_message = 'No ads detected on channel 14!'

        return jsonify({
            'channel': '14',
            'ads_detected': is_ads_detected,
            'message': test_message
        })


""" ----------------------------------------------------------------------------------------------- """
""" ----------------------------------------------------------------------------------------------- """