/**
 * @jest-environment jsdom
 */

const html = `
    <main class="wrapper">
        <h2>Split the nota</h2>
        <section class="form" id="inputForm">
            <section>
                <input type="text" id="sum" class="form__input" required>
                <label for="sum" class="form__label form__label_sum">Summa</label>
            </section>
            <section>
                <input type="text" id="numberOfFriends" class="form__input" required>
                <label for="numberOfFriends" class="form__label form__label_friends">Antal vänner</label>
            </section>
            <section>
                <input type="text" id="tip" class="form__input" required>
                <label for="tip" class="form__label form__label_tip">Dricks skrivs 0.10 (10%)</label>
            </section>
            <p class="hide" id="error">Fyll i alla fälten!</p>
            <button id="calculateButton" class="form__button">Räkna</button>
        </section>
        <section class="form hide" id="showSum">
            <article>
                <h2>Varje person ska betala</h2>
                <h3 id="friendSum" class="show-sum"></h3>
            </article>
        </section>
    </main>
`;

// Test suite
describe("Split the nota", () => {
  beforeEach(() => {
    document.body.innerHTML = html;
    require("./index");
  });

  it("should show the correct sum for each friend", () => {
    // Arrange
    document.querySelector("#sum").value = 1000;
    document.querySelector("#numberOfFriends").value = 4;
    document.querySelector("#tip").value = 0.1;

    // Act
    document.querySelector("#calculateButton").click();

    // Assert
    const actual = document.querySelector("#friendSum").textContent;
    expect(actual).toBe("275 kr");
  });

  it("should show error message if not all input fields are filled in", () => {
    document.querySelector("#calculateButton").click();

    const actual = document.querySelector("#error").textContent;
    expect(actual).toBe("Fyll i alla fälten!");
  });
});
