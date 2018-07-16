
#include <iostream>
#include <cstring>
#include <string>
using namespace std;
int main() {
  int i,j;
  string dev;
  string device[]={
    "light",
    "fan"
  }; //just use string
  bool status[]={"on","off"};
  std::cout << "Enter the device\n";
  std::cin >> dev;
  for (i = 0; i <= sizeof(device); i++) {
            if (strcmp(device[i].c_str(),dev.c_str()) == 0) {
          std::cout << status[i]; // change to cout
      }
    }

  }
  return 0;
}

// Did you learn something today ? lot of things

// Dont have to learn c++ syntax, if you get the logic then its fine and good

// ok its fine for today okey na

// are you tired ? illa na sleep pannanu neenga thoongalaya

// oh 1:35 ippothan time pakuren
//
// ok good night , can we try on ES6 tomorrow? ok na tomorrow morning paklam ES6
//
// good night , bye ok na
