require "pry"

RSpec.describe 'styling' do
  
  context 'within main.css' do
    it 'sets #red border top color to #f00' do
      selector = parsed_css.find_by_selector('#red')[0]
      expect(selector).to include("border-top-color: #f00;"), "Missing correct color"
    end
    it 'sets #orange border top color to #ffa500' do
      selector = parsed_css.find_by_selector('#orange')[0]
      expect(selector).to include("border-top-color: #ffa500;"), "Missing correct color"
    end
    it 'sets #yellow border top color to #ff0' do
      selector = parsed_css.find_by_selector('#yellow')[0]
      expect(selector).to include("border-top-color: #ff0;"), "Missing correct color"
    end
    it 'sets #green border top color to #00bc3f' do
      selector = parsed_css.find_by_selector('#green')[0]
      expect(selector).to include("border-top-color: #00bc3f;"), "Missing correct color"
    end
    it 'sets #blue border top color to #06f' do
      selector = parsed_css.find_by_selector('#blue')[0]
      expect(selector).to include("border-top-color: #06f;"), "Missing correct color"
    end
    it 'sets #indigo border top color to #8a2be2' do
      selector = parsed_css.find_by_selector('#indigo')[0]
      expect(selector).to include("border-top-color: #8a2be2;"), "Missing correct color"
    end
    it 'sets #violet border top color to #d300c9' do
      selector = parsed_css.find_by_selector('#violet')[0]
      expect(selector).to include("border-top-color: #d300c9;"), "Missing correct color"
    end

  
  end
  
end
