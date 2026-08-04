import 'dart:async';

class AudioService {
  bool _isRecording = false;
  bool _isPlaying = false;

  bool get isRecording => _isRecording;
  bool get isPlaying => _isPlaying;

  Future<void> startRecording() async {
    _isRecording = true;
    print('[AudioService] Started microphone recording...');
  }

  Future<String?> stopRecording() async {
    _isRecording = false;
    print('[AudioService] Stopped recording. Saved audio file.');
    return '/tmp/recorded_audio_sample.wav';
  }

  Future<void> playAudio(String audioUrl) async {
    _isPlaying = true;
    print('[AudioService] Playing TTS audio from: $audioUrl');
    await Future.delayed(const Duration(seconds: 2));
    _isPlaying = false;
  }
}
