import React, { useEffect, useState } from "react";

interface Card {
  id: string;
  name: string;
  rarity: string;
  images: {
    small: string;
  };
}

function AppFecth(): JSX.Element {
  
  const [cards, setCards] = useState<Card[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  console.log(cards);
  const fetchCards = async () => {

    if (searchTerm === "") {
      const response = await fetch(`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=30`);
      const data = await response.json();
      setCards(data.data);
    } else {
      const results = await searchCards(searchTerm);
      setCards(results);
    }
  };
  useEffect(() => {
    fetchCards();
  }, [page, searchTerm]);

  async function searchCards(query: string): Promise<Card[]> {
    const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${query}`);
    const data = await response.json();
    return data.data;
  }

  const handleSearch = (): void => {
    setSearchTerm(query);
    setPage(1);

  };


  return (
    <div className="container">
      <h1 className="text-center">Pokemon TCG Cards</h1>
      <div className="d-flex justify-content-center mt-3">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="btn btn-primary mr-3">
          Previous
        </button>
        <button onClick={() => setPage(page + 1)} className="btn btn-primary">
          Next
        </button>
      </div>
      <div>
        <input type="text" placeholder="Search cards by name" value={query} onChange={(event) => setQuery(event.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-md-3 mb-3">
            <div className="card">
              <img src={card.images.small} className="card-img-top" alt={card.name} />
              <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <p className="card-text">{card.rarity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default AppFecth;
