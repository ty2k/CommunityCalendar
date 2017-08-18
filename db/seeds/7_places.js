
exports.seed = function(knex, Promise) {
  return knex('places').del()
    .then(function () {
      return Promise.all([
        knex('places').insert({id: 1, region_id: 3, name: 'Archie Browning Sports Centre', abbreviation: 'ABSC', street_address: '1151 Esquimalt Road', slug: 'achie-browning-sports-centre'}),
        knex('places').insert({id: 2, region_id: 3, name: 'Esquimalt Recreation Centre', abbreviation: 'ERC', street_address: '527 Fraser Street', slug: 'esquimalt-recreation-centre'}),
        knex('places').insert({id: 3, region_id: 8, name: 'Juan de Fuca Recreation Centre', abbreviation: 'JDFRC', street_address: '1767 Island Highway', slug: 'juan-de-fuca-recreation-centre'}),
        knex('places').insert({id: 4, region_id: 8, name: 'The Q Centre', abbreviation: 'TQC', street_address: '1767 Island Highway', slug: 'the-q-centre'}),
        knex('places').insert({id: 5, region_id: 2, name: 'Henderson Recreation Centre', abbreviation: 'HRC', street_address: '2291 Cedar Hill X Road', slug: 'henderson-recreation-centre'}),
        knex('places').insert({id: 6, region_id: 2, name: 'Monterey Recreation Centre', abbreviation: 'MRC', street_address: '1442 Monterey Avenue', slug: 'monterey-recreation-centre'}),
        knex('places').insert({id: 7, region_id: 2, name: 'Oak Bay Recreation Centre', abbreviation: 'OBRC', street_address: '1975 Bee Street', slug: 'oak-bay-recreation-centre'}),
        knex('places').insert({id: 8, region_id: 7, name: 'Panorama Recreation Centre', abbreviation: 'PanoramaRC', street_address: '1885 Forest Park Drive', slug: 'panorama-recreation-centre'}),
        knex('places').insert({id: 9, region_id: 10, name: 'Greenglade Community Centre', abbreviation: 'GCC', street_address: '2151 Lannon Way', slug: 'greenglade-community-centre'}),
        knex('places').insert({id: 10, region_id: 4, name: 'Cedar Hill Golf Course', abbreviation: 'CHGC', street_address: '1400 Derby Road', slug: 'cedar-hill-golf-course'}),
        knex('places').insert({id: 11, region_id: 4, name: 'Cedar Hill Recreation Centre', abbreviation: 'CHRC', street_address: '3220 Cedar Hill Road', slug: 'cedar-hill-recreation-centre'}),
        knex('places').insert({id: 12, region_id: 4, name: 'Gordon Head Recreation Centre', abbreviation: 'GHRC', street_address: '4100 Lambrick Way', slug: 'gordon-head-recreation-centre'}),
        knex('places').insert({id: 13, region_id: 4, name: 'Pearkes Recreation Centre', abbreviation: 'PearkesRC', street_address: '3100 Tillicum Road', slug: 'pearkes-recreation-centre'}),
        knex('places').insert({id: 14, region_id: 4, name: 'Saanich Commonwealth Place', abbreviation: 'SCP', street_address: '4636 Elk Lake Drive', slug: 'saanich-commonwealth-place'}),
        knex('places').insert({id: 15, region_id: 1, name: 'Crystal Pool & Fitness Centre', abbreviation: 'CPFC', street_address: '2275 Quadra Street', slug: 'crystal-pool-&-fitness-centre'}),
        knex('places').insert({id: 16, region_id: 1, name: 'Royal Athletic Park', abbreviation: 'RAP', street_address: '1014 Caledonia Avenue', slug: 'royal-athletic-park'}),
        knex('places').insert({id: 17, region_id: 1, name: 'Save-On-Foods Memorial Centre', abbreviation: 'SOFMC', street_address: '1952 Blanshard Street', slug: 'save-on-foods-memorial-centre'}),
        knex('places').insert({id: 18, region_id: 1, name: 'Quadra Village Community Centre', abbreviation: 'QVCC', street_address: '901 Kings Road', slug: 'quadra-village-community-centre'}),
        knex('places').insert({id: 19, region_id: 1, name: 'Fairfield Community Centre', abbreviation: 'FairfieldCC', street_address: '1330 Fairfield Road', slug: 'fairfield-community-centre'}),
        knex('places').insert({id: 20, region_id: 1, name: 'Fairfield Activity Centre', abbreviation: 'FAC', street_address: '380 Cook Street', slug: 'fairfield-activity-centre'}),
        knex('places').insert({id: 21, region_id: 1, name: 'Fernwood Community Centre', abbreviation: 'FernwoodCC', street_address: '1240 Gladstone Avenue', slug: 'fernwood-community-centre'}),
        knex('places').insert({id: 22, region_id: 1, name: 'James Bay Community Centre', abbreviation: 'JBCC', street_address: '140 Oswego Street', slug: 'james-bay-community-centre'}),
        knex('places').insert({id: 23, region_id: 1, name: 'Oaklands Community Centre', abbreviation: 'OCC', street_address: '1-2827 Belmont Avenue', slug: 'oaklands-community-centre'}),
        knex('places').insert({id: 24, region_id: 1, name: 'Victoria West Community Centre', abbreviation: 'VWCC', street_address: '521 Craigflower Road', slug: 'victoria-west-community-centre'}),
        knex('places').insert({id: 25, region_id: 1, name: 'James Bay New Horizons', abbreviation: 'JBNH', street_address: '234 Menzies Street', slug: 'james-bay-new-horizons'}),
        knex('places').insert({id: 26, region_id: 1, name: 'Burnside Gorge Community Centre', abbreviation: 'BGCC', street_address: '471 Cecelia Road', slug: 'burnside-gorge-community-centre'}),
        knex('places').insert({id: 27, region_id: 1, name: 'Fairfield Community Place', abbreviation: 'FCP', street_address: '1330 Fairfield Road', slug: 'fairfield-community-place'}),
        knex('places').insert({id: 28, region_id: 1, name: 'Fairfield Community Centre - Garry Oaks Room', abbreviation: 'FCC-GAR', street_address: '1341 Thurlow Road', slug: 'fairfield-community-centre---garry-oaks-room'}),
        knex('places').insert({id: 29, region_id: 1, name: 'James Bay Community School Centre', abbreviation: 'JBCSC', street_address: '140 Oswego Street', slug: 'james-bay-community-school-centre'}),
        knex('places').insert({id: 30, region_id: 1, name: 'Oaklands Neighbourhood House (Little Acorn)', abbreviation: 'ONH-LA', street_address: '2629 Victor Street', slug: 'oaklands-neighbourhood-house-(little-acorn)'}),
        knex('places').insert({id: 31, region_id: 1, name: 'YMCA-YMCA Downtown', abbreviation: 'Y-Downtown', street_address: '851 Broughton Street', slug: 'ymca-ywca-downtown'}),
        knex('places').insert({id: 32, region_id: 11, name: 'SEAPARC Leisure Complex', abbreviation: 'SEAPARC', street_address: '2168 Phillips Rpad', slug: 'separc-leisure-complex'}),
        knex('places').insert({id: 33, region_id: 5, name: 'Eagle Ridge Community Centre', abbreviation: 'ERCC', street_address: '1089 Langford Parkway', slug: 'eagle-ridge-community-centre'}),
        knex('places').insert({id: 34, region_id: 5, name: 'North Langford Recreation Centre', abbreviation: 'NLRC', street_address: '1999 Country Club Way', slug: 'north-langford-recreation-centre'}),
        knex('places').insert({id: 35, region_id: 5, name: 'Langford Lanes', abbreviation: 'LL', street_address: '1089 Langford Parkway', slug: 'langford-lanes'}),
        knex('places').insert({id: 36, region_id: 5, name: 'Westhills Arena', abbreviation: 'WHA', street_address: '1089 Langford Parkway', slug: 'westhills-arena'}),
        knex('places').insert({id: 37, region_id: 5, name: 'Westhills Stadium', abbreviation: 'WHS', street_address: '1089 Langford Parkway', slug: 'westhills-stadium'}),
        knex('places').insert({id: 38, region_id: 5, name: 'Goudy Field', abbreviation: 'GF', street_address: '1089 Langford Parkway', slug: 'goudy-field'}),
        knex('places').insert({id: 39, region_id: 5, name: 'City Centre Park & Family Fun Zone', abbreviation: 'CCP&FFZ', street_address: '1089 Langford Parkway', slug: 'city-centre-park-&-family-fun-zone'}),
        knex('places').insert({id: 40, region_id: 5, name: 'YMCA-YWCA Westhills', abbreviation: 'Y-Westhills', street_address: '1319 Westhills Drive', slug: 'ymca-ywca-westhills'}),
        knex('places').insert({id: 41, region_id: 13, name: 'YMCA-YWCA Eagle Creek', abbreviation: 'Y-EagleCreek', street_address: '110-25 Helmcken Road', slug: 'ymca-ywca-eagle-creek'}),
        knex('places').insert({id: 42, region_id: 8, name: 'Wild Play West Shore Element Park', abbreviation: 'WPWSEP', street_address: '1767 Island Highway', slug: 'wildplay-west-shore-element-park'}),
        knex('places').insert({id: 43, region_id: 8, name: 'Juan De Fuca Par 3 Golf Course', abbreviation: 'JDFGC', street_address: '1767 Island Highway', slug: 'juan-de-fuca-par-3-golf-course'}),
        knex('places').insert({id: 44, region_id: 13, name: 'Shoreline Community Middle School', abbreviation: 'SCMS', street_address: '2750 Shoreline Drive', slug: 'shoreline-community-middle-school'}),
        knex('places').insert({id: 45, region_id: 12, name: 'Butchart Gardens', abbreviation: 'BG', street_address: '800 Benvenuto Avenue', slug: 'butchart-gardens'}),
        knex('places').insert({id: 46, region_id: 6, name: 'Metchosin Arts and Cultural Centre', abbreviation: 'MACC', street_address: '4495 Happy Valley Road', slug: 'metchosin-arts-and-cultural-centre'}),
        knex('places').insert({id: 47, region_id: 10, name: 'Shaw Centre for the Salish Sea', abbreviation: 'SCSS', street_address: '9811 Seaport Place', slug: 'shaw-centre-for-the-salish-sea'}),
        knex('places').insert({id: 48, region_id: 7, name: 'British Columbia Aviation Museum', abbreviation: 'BCAM', street_address: '1910 Norseman Road', slug: 'british-columbia-aviation-museum'}),
        knex('places').insert({id: 49, region_id: 9, name: 'Caleb Pike House', abbreviation: 'CPH', street_address: '1589 Millstream Road', slug: 'caleb-pike-house'}),
        knex('places').insert({id: 50, region_id: 1, name: 'Canadian Scottish Regimental Museum', abbreviation: 'CSRM', street_address: '715 Bay Street', slug: 'canadian-scottish-regimental-museum'}),
        knex('places').insert({id: 51, region_id: 1, name: 'Craigdarroch Castle and Historic House Museum', abbreviation: 'CCHHM', street_address: '1050 Joan Crescent', slug: 'craigdarroch-castle-and-historic-house-museum'}),
        knex('places').insert({id: 52, region_id: 12, name: 'Heritage Acres (Saanich Historical Artificats Society)', abbreviation: 'HASHAS', street_address: '7321 Lochside Drive', slug: 'heritage-acres-saanich-historical-artifacts-society'}),
        knex('places').insert({id: 53, region_id: 1, name: 'Maritime Museum of British Columbia', abbreviation: 'MMBC', street_address: '28 Bastion Square', slug: 'maritime-museum-of-bc'}),
        knex('places').insert({id: 54, region_id: 11, name: 'Sooke Region Museum & Visitor Centre', abbreviation: 'SRMVC', street_address: '2070 Phillips Road', slug: 'sooke-region-museum-&-visitor-centre'}),
        knex('places').insert({id: 55, region_id: 1, name: 'Art Gallery of Greater Victoria', abbreviation: 'AGGV', street_address: '1040 Moss Street', slug: 'art-gallery-of-greater-victoria'}),
        knex('places').insert({id: 56, region_id: 1, name: 'Royal BC Museum', abbreviation: 'RBCM', street_address: '675 Belleville Street', slug: 'royal-bc-museum'}),
        knex('places').insert({id: 57, region_id: 3, name: 'CFB Esquimalt Naval and Military Museum', abbreviation: 'CFBENMM', street_address: '1299 Naden Way', slug: 'cfb-esquimalt-naval-and-military-museum'}),
        knex('places').insert({id: 58, region_id: 12, name: 'Saanich Pioneers Museum and Archives', abbreviation: 'SPMA', street_address: '7900 East Saanich Road', slug: 'saanich-pioneers-museum-and-archives'}),
        knex('places').insert({id: 59, region_id: 10, name: 'Sidney Museum and Archives', abbreviation: 'SMA', street_address: '2423 Beacon Avenue', slug: 'sidney-museum-and-archives'})

      ]);
    });
};
