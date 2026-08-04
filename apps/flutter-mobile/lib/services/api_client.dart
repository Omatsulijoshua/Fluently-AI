import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiClient {
  final String baseUrl;

  ApiClient({this.baseUrl = 'http://localhost:3000/api/v1'});

  Future<Map<String, dynamic>> checkBackendHealth() async {
    try {
      final response = await http.get(Uri.parse('http://localhost:3000/health'));
      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      }
      return {'status': 'error', 'statusCode': response.statusCode};
    } catch (e) {
      return {'status': 'offline', 'error': e.toString()};
    }
  }

  Future<Map<String, dynamic>> checkAIStatus() async {
    try {
      final response = await http.get(Uri.parse('http://localhost:8000/health'));
      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      }
      return {'status': 'error'};
    } catch (e) {
      return {'status': 'offline'};
    }
  }
}
