

document.addEventListener("DOMContentLoaded", function () {

  const addButton = document.getElementById("add_button"); // İlave Et butonunu seç
  const clearButton = document.getElementById("clear_button"); // Temizle butonunu seç

  const totalScoreElement = document.getElementById("total_score");
  const tableBody = document.querySelector("tbody"); // Tablonun tbody kısmını seç

  let totalScore = 0;

  let totalDosageValue = 0;
  let totalDoseFrequencyValue = 0;
  let totalAdditionalInstractionValue = 0;

  let drugList = []


  clearTable();

  addButton.addEventListener("click", function (event) {
    event.preventDefault(); // Butonun varsayılan işlevini engelle

    let totalDosageElement = document.getElementById("total_dosage");
    let totalDoseFrequencyElement = document.getElementById(
      "total_dose_frequency"
    );
    let totalAdditionalInstractionElement = document.getElementById(
      "total_additional_instraction"
    );

    drugList.push({
      dosageName: document.getElementById("dosage_name").selectedOptions[0].text,
      doseFrequency: document.getElementById("dose_frequency").selectedOptions[0].text,
      additionalInstructions: document.getElementById("additional_instructions").selectedOptions[0].text
    });

    console.log(drugList)

    // Select kutularından değerleri al
    const dosageName =
      document.getElementById("dosage_name").selectedOptions[0].text;
    const doseFrequency =
      document.getElementById("dose_frequency").selectedOptions[0].text;
    const additionalInstructions = document.getElementById(
      "additional_instructions"
    ).selectedOptions[0].text;

    // value değerlerini al ve integer'a çevir
    const dosageNameValue = parseFloat(
      document.getElementById("dosage_name").selectedOptions[0].value
    );
    const doseFrequencyValue = parseFloat(
      document.getElementById("dose_frequency").selectedOptions[0].value
    );
    const additionalInstructionValue = parseFloat(
      document.getElementById("additional_instructions").selectedOptions[0]
        .value
    );

    // value değerlerini topla
    const score =
      dosageNameValue + doseFrequencyValue + additionalInstructionValue;

    // Yeni tablo satırı oluştur
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
          <td class="border px-4 py-2">${(tableBody.rows.length -1) + 1}</td>
          <td class="border px-4 py-2">${dosageName}</td>
          <td class="border px-4 py-2">${doseFrequency}</td>
          <td class="border px-4 py-2">${additionalInstructions}</td>
          <td class="border px-4 py-2">${score}</td>
      `;

    // Yeni satırı tabloya ekle
    tableBody.insertBefore(newRow, tableBody.lastChild);
    // tableBody.appendChild(newRow);
    totalScore += score;

    totalDosageValue += dosageNameValue;
    totalDoseFrequencyValue += doseFrequencyValue;
    totalAdditionalInstractionValue += additionalInstructionValue;

    totalDosageElement.innerHTML = totalDosageValue;
    totalDoseFrequencyElement.innerHTML = totalDoseFrequencyValue;
    totalAdditionalInstractionElement.innerHTML =
      totalAdditionalInstractionValue;

    totalScoreElement.innerHTML = totalScore;
    // Opsiyonel: Formu temizleme veya başka işlemler yapabilirsiniz.
  });

  clearButton.addEventListener("click", function (event) {
    event.preventDefault(); // Butonun varsayılan işlevini engelle
    clearTable();
  });

  function clearTable() {
    tableBody.innerHTML = "";
    totalScore = 0;
    totalScoreElement.innerHTML = totalScore;
    totalDosageValue = 0;
    totalDoseFrequencyValue = 0;
    totalAdditionalInstractionValue = 0;

    // Yeni tablo satırı oluştur
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
          <td class="border px-4 py-2">Sütun Toplamları</td>
          <td id="total_dosage" class="border px-4 py-2">-</td>
          <td id="total_dose_frequency" class="border px-4 py-2">-</td>
          <td id="total_additional_instraction" class="border px-4 py-2">-</td>
          <td class="border px-4 py-2"></td>
        `;
    tableBody.insertBefore(newRow, tableBody.firstChild);
  }
});
