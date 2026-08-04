import 'package:flutter/material.dart';
import 'theme/app_theme.dart';
import 'screens/home_screen.dart';
import 'screens/conversation_screen.dart';

void main() {
  runApp(const FluentlyApp());
}

class FluentlyApp extends StatelessWidget {
  const FluentlyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fluently AI',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.darkTheme,
      initialRoute: '/',
      routes: {
        '/': (context) => const HomeScreen(),
        '/conversation': (context) => const ConversationScreen(),
      },
    );
  }
}
