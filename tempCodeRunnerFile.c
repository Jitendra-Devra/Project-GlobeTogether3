#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX 10
#define STACK_SIZE 100

typedef struct {
    char nonTerminal;
    char production[MAX];
} ParsingTable;

char stack[STACK_SIZE];
int top = -1;

void push(char c) {
    if (top == STACK_SIZE - 1) {
        printf("Stack Overflow!\n");
        return;
    }
    stack[++top] = c;
}

char pop() {
    if (top == -1) {
        printf("Stack Underflow!\n");
        return '\0';
    }
    return stack[top--];
}

char peek() {
    return (top == -1) ? '\0' : stack[top];
}

void displayStack() {
    for (int i = 0; i <= top; i++) {
        printf("%c", stack[i]);
    }
    printf("\n");
}

int findProduction(ParsingTable table[], int tableSize, char nonTerminal, char terminal, char *production) {
    for (int i = 0; i < tableSize; i++) {
        if (table[i].nonTerminal == nonTerminal && table[i].production[0] == terminal) {
            strcpy(production, table[i].production + 2); // Skip the non-terminal and separator
            return 1;
        }
    }
    return 0;
}

void predictiveParsing(ParsingTable table[], int tableSize, char startSymbol, char *input) {
    int inputLen = strlen(input);
    int i = 0;
    char production[MAX];

    push('$');
    push(startSymbol);

    printf("Parsing Steps:\n");
    printf("Stack\t\tInput\t\tAction\n");

    while (i < inputLen) {
        displayStack();
        printf("\t\t%s\t\t", input + i);

        char topSymbol = peek();

        if (topSymbol == input[i]) { // Match terminal
            printf("Match '%c'\n", input[i]);
            pop();
            i++;
        } else if (isupper(topSymbol)) { // Non-terminal
            if (findProduction(table, tableSize, topSymbol, input[i], production)) {
                printf("Expand %c -> %s\n", topSymbol, production);
                pop();
                for (int j = strlen(production) - 1; j >= 0; j--) {
                    if (production[j] != 'ε') { // Push symbols in reverse (ignore ε)
                        push(production[j]);
                    }
                }
            } else {
                printf("Error: No rule for %c with input %c\n", topSymbol, input[i]);
                return;
            }
        } else {
            printf("Error: Mismatch at '%c'\n", input[i]);
            return;
        }
    }

    displayStack();
    printf("\t\t%s\t\t", input + i);
    if (peek() == '$') {
        printf("Accept\n");
    } else {
        printf("Reject: Stack not empty\n");
    }
}

int main() {
    int tableSize;
    char startSymbol;
    char input[MAX];
    ParsingTable table[MAX];

    printf("Enter the start symbol: ");
    scanf(" %c", &startSymbol);

    printf("Enter the number of productions in the parsing table: ");
    scanf("%d", &tableSize);

    printf("Enter the parsing table (format: NonTerminal Terminal Production):\n");
    for (int i = 0; i < tableSize; i++) {
        printf("Rule %d: ", i + 1);
        scanf(" %c %s", &table[i].nonTerminal, table[i].production);
    }

    printf("Enter the input string (end with $): ");
    scanf("%s", input);

    predictiveParsing(table, tableSize, startSymbol, input);

    return 0;
}
