#include <iostream>
#include <limits>

using namespace std;

// this function receives four parameters which is what the user inputs
void modifyElement(int arr[], int size, int index, int newValue) {
    
    if (index >= 0 && index < size) {
        arr[index] = newValue;
    } else {
        cout << "Your index is out of bounds!" << endl;
    }
}

void findMinMax(const int arr[], int size, int &minVal, int &maxVal) {
    minVal = numeric_limits<int>::max();
    maxVal = numeric_limits<int>::lowest();

    for (int i = 0; i < size; ++i) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
}

int main() {
    int size;

    cout << "Enter the size of the array: ";
    cin >> size;

    int arr[size];

    cout << "Enter the elements of the array: ";
    for (int i = 0; i < size; ++i) {
        cin >> arr[i];
    }

    int index, newValue;
    cout << "Enter the index of the element to modify: ";
    cin >> index;
    cout << "Enter the new value: ";
    cin >> newValue;

    modifyElement(arr, size, index, newValue);

    int minVal, maxVal;
    findMinMax(arr, size, minVal, maxVal);

    cout << "Modified array: ";
    for (int i = 0; i < size; ++i) {
        cout << arr[i] << " ";
    }
    cout << endl;

    cout << "Minimum value in the array: " << minVal << endl;
    cout << "Maximum value in the array: " << maxVal << endl;

    return 0;
}
