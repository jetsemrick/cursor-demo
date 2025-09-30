import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import './TeamsTable.css';

/**
 * Interface representing a team result from the database
 */
interface TeamResult {
  id: number;
  team_code: string;
  wins: number;
  losses: number;
  tournaments: string;
}

/**
 * TeamsTable component that displays team results from Supabase
 * Includes loading states and error handling
 */
const TeamsTable: React.FC = () => {
  const [teams, setTeams] = useState<TeamResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTeams();
  }, []);

  /**
   * Fetches team results from the Supabase results table
   */
  const fetchTeams = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('results')
        .select('*')
        .order('wins', { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setTeams(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch teams');
      console.error('Error fetching teams:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Calculates win percentage for display
   */
  const calculateWinPercentage = (wins: number, losses: number): string => {
    const total = wins + losses;
    if (total === 0) return '0.0%';
    return `${((wins / total) * 100).toFixed(1)}%`;
  };

  if (loading) {
    return (
      <div className="teams-table">
        <div className="teams-table__loading">
          <div className="teams-table__spinner"></div>
          <p>Loading team results...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="teams-table">
        <div className="teams-table__error">
          <p>❌ Error loading teams: {error}</p>
          <button onClick={fetchTeams} className="teams-table__retry">
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (teams.length === 0) {
    return (
      <div className="teams-table">
        <div className="teams-table__empty">
          <p>No team results found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="teams-table">
      <h2 className="teams-table__title">Team Results</h2>
      <div className="teams-table__container">
        <table className="teams-table__table">
          <thead>
            <tr>
              <th>Team Code</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Win %</th>
              <th>Tournaments</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.id}>
                <td className="teams-table__team-code">{team.team_code}</td>
                <td className="teams-table__wins">{team.wins}</td>
                <td className="teams-table__losses">{team.losses}</td>
                <td className="teams-table__percentage">
                  {calculateWinPercentage(team.wins, team.losses)}
                </td>
                <td className="teams-table__tournaments">{team.tournaments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamsTable;

