#include <iostream>
#include <array>
 

using namespace std;

int mystack[1000];
int len = -1;

void push_stack(int n) {
    len++;
    mystack[len] = n;
    cout << "ok" << endl;
}

void pop_stack() {
    cout << mystack[len] << endl;
    mystack[len] = 0;
    len--;
    cout << "ok" << endl;
}

void back_stack() {
    len--;
    cout << "ok" << endl;
}

void size_stack() {
    int size = len + 1;
    cout << size << endl;
}

void clear_stack() {
    while(len != -1){
        mystack[len] = 0;
        len--;
    }
    cout << "ok" << endl;
}

int main() {

    bool check = false;
    string command;
    int num;
    while (check == false){
        cin >> command;
        if(command == "push"){
            cin >> num;
            push_stack(num);
        }
        else if(command == "pop"){
            if(len >= 0){
                pop_stack();
            } else {
                cout << "error" << endl;
            }
        }
        else if(command == "back"){
            if(len >= 0){
                back_stack();
            } else {
                cout << "error" << endl;
            }
        }
        else if(command == "size"){
            size_stack();
        }
        else if(command == "clear"){
            if(len >= 0){
                clear_stack();
            } else {
                cout << "error" << endl;
            }
        }
        if(command == "exit"){
            check = true;
            cout << "bye";
        }
    }

    return 0;
}
